import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    welcomePageDisplay: 'block',
    infoPageFredDisplay: 'none',
    infoPageLizDisplay: 'none',
    infoPageEchoDisplay: 'none',
    infoPageOliverDisplay: 'none',
    title: 'T.W main cast',
  };

  handleWelcomePagePress = () =>
    this.setState((state) => ({
      welcomePageDisplay: 'block',
      infoPageFredDisplay: 'none',
      infoPageLizDisplay: 'none',
      infoPageEchoDisplay: 'none',
      infoPageOliverDisplay: 'none',
    }));

  handleInfoPageFredPress = () =>
    this.setState((state) => ({
      welcomePageDisplay: 'none',
      infoPageFredDisplay: 'block',
      infoPageLizDisplay: 'none',
      infoPageEchoDisplay: 'none',
      infoPageOliverDisplay: 'none',
    }));

  handleInfoPageLizPress = () =>
    this.setState((state) => ({
      welcomePageDisplay: 'none',
      infoPageFredDisplay: 'none',
      infoPageLizDisplay: 'block',
      infoPageEchoDisplay: 'none',
      infoPageOliverDisplay: 'none',
    }));

  handleInfoPageEchoPress = () =>
    this.setState((state) => ({
      welcomePageDisplay: 'none',
      infoPageFredDisplay: 'none',
      infoPageLizDisplay: 'none',
      infoPageEchoDisplay: 'block',
      infoPageOliverDisplay: 'none',
    }));

  handleInfoPageOliverPress = () =>
    this.setState((state) => ({
      welcomePageDisplay: 'none',
      infoPageFredDisplay: 'none',
      infoPageLizDisplay: 'none',
      infoPageEchoDisplay: 'none',
      infoPageOliverDisplay: 'block',
    }));

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainera}>
          <TouchableHighlight
            style={styles.navButton}
            onPress={this.handleWelcomePagePress}>
            <Text style={styles.navButtonText}>Welcome</Text>
          </TouchableHighlight>
        </View>

        <View style={{ display: this.state.welcomePageDisplay }}>
          <View style={styles.titleScreenContainer}>
            <View style={styles.titleContainera}>
              <Text style={styles.titleLarge}>T.W main cast</Text>
            </View>

            <View style={styles.imageContainerTitle}>
              <Image
                source={{
                  uri: 'https://codehs.com/uploads/e8a330a4fa930f4c37593813e4bc5172',
                }}
                style={{ height: 214, width: 214 }}
              />
            </View>
          </View>
        </View>

        <View style={{ display: this.state.infoPageFredDisplay }}>
          <View style={styles.fredSlide}>
            <View style={styles.bottomContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: 'https://codehs.com/uploads/7f8caa152ad60557a3f1207fd34074d8',
                  }}
                  style={{ height: 214, width: 214 }}
                />
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descText}>Name: Fred Williams</Text>
                <Text style={styles.descText}>Pronouns: he/him</Text>
                <Text style={styles.descText}>
                  Hobbies: mmm minecraft. also plays the guitar
                </Text>
                <Text style={styles.descText}>
                  Other: married to lisms :) . works at a resturaunt
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ display: this.state.infoPageLizDisplay }}>
          <View style={styles.lizSlide}>
            <View style={styles.bottomContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: 'https://codehs.com/uploads/ee07f2bf3d6a49c66cb4531295b94bb2',
                  }}
                  style={{ height: 214, width: 214 }}
                />
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descText}>
                  Name: Liz (Elizabeth) Williams
                </Text>
                <Text style={styles.descText}>Pronouns: she/her</Text>
                <Text style={styles.descText}>
                  Hobbies: drawing, playing minecraft with febby
                </Text>
                <Text style={styles.descText}>
                  Other: married to febby :)) . doesn't have a job
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ display: this.state.infoPageEchoDisplay }}>
          <View style={styles.echoSlide}>
            <View style={styles.bottomContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: 'https://codehs.com/uploads/edf9cd720535233797c30939ea6f51f0',
                  }}
                  style={{ height: 214, width: 214 }}
                />
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descText}>Name: Echo (Adrian) Lena</Text>
                <Text style={styles.descText}>Pronouns: he/they</Text>
                <Text style={styles.descText}>
                  Hobbies: sleeping . plays the bass in fred's band
                </Text>
                <Text style={styles.descText}>
                  Other: works at a grocery store. imagine that
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ display: this.state.infoPageOliverDisplay }}>
          <View style={styles.oliverSlide}>
            <View style={styles.bottomContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: 'https://codehs.com/uploads/fb7a3a79d45e1fee172dd6a9717d542a',
                  }}
                  style={{ height: 214, width: 214 }}
                />
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.descText}>Name: Oliver</Text>
                <Text style={styles.descText}>Pronouns: he/she/they (any)</Text>
                <Text style={styles.descText}>
                  Hobbies: gardening. plays the drums in fred's band
                </Text>
                <Text style={styles.descText}>
                  Other: owns a store that sells flowers, works with Al
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.navContainerb}>
          <TouchableHighlight
            style={styles.navButton}
            onPress={this.handleInfoPageFredPress}>
            <Text style={styles.navButtonText}>Fred</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            onPress={this.handleInfoPageLizPress}>
            <Text style={styles.navButtonText}>Liz</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            onPress={this.handleInfoPageEchoPress}>
            <Text style={styles.navButtonText}>Echo</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navButton}
            onPress={this.handleInfoPageOliverPress}>
            <Text style={styles.navButtonText}>Oliver</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },

  navContainera: {
    alignItems: 'center',
    backgroundColor: '#DE95BC',
  },

  titleScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBCE0',
  },

  titleContainera: {},

  imageContainerTitle: {
    marginTop: deviceHeight / 5,
    marginBottom: deviceHeight / 4.2,
  },

  titleLarge: {
    marginTop: deviceHeight / 81,
    fontSize: deviceHeight / 24.5,
    fontWeight: 550,
    marginBottom: deviceHeight / 50,
  },

  //other tabs

  bottomContainer: {
    marginBottom: deviceHeight / 5.5,
  },

  imageContainer: {
    alignItems: 'center',
  },

  descriptionContainer: {
    alignItems: 'center',
  },

  descText: {
    fontSize: deviceHeight / 35,
    fontWeight: 500,
    marginBottom: deviceHeight / 42.5,
    margin: 3,
  },

  fredSlide: {
    backgroundColor: '#C6DDF7',
  },

  lizSlide: {
    backgroundColor: '#C6F3C6',
  },

  echoSlide: {
    backgroundColor: '#F8C6C5',
  },

  oliverSlide: {
    backgroundColor: '#FBECC5',
  },

  navContainerb: {
    flexDirection: 'row',
    alignItems: 'center',
    justfiyContent: 'center',
    backgroundColor: '#DE95BC',
  },

  navButton: {
    height: deviceHeight / 30,
    width: deviceWidth / 4.7,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: deviceHeight / 120,
    backgroundColor: '#FFBCE0',
  },

  navButtonText: {
    color: 'black',
    fontSize: deviceHeight / 55,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
