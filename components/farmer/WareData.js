import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import StarRating from 'react-native-star-rating'



export default class CardImageExample extends Component {



  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }


  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/logo.jpg')} />
                <Body>
                  <Text>Rohan's Ware-House</Text>
                  <Text note>Anand Nagar,Nanded</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/warehouse.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                <StarRating disabled={false} maxStars={5} starSize={15}
                 StarColor={'gold'}               
                 rating={this.state.starCount} 
                 selectedStar={(rating) => this.onStarRatingPress(rating)}
                 />
                  
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Capacity:70 sq.ft</Text>
                </Button>
              </Body>
              <Right>
                <Text>1km</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}