import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  loginLogo: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  loginInputGroup: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginButtonsGroup: {
    flex:0.4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginButton: {
    marginLeft: 100,
    marginRight: 100,
  },
  loginTitle: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    fontFamily: "Roboto",
  },
  inputItem: {
    backgroundColor: "white",
    marginBottom: 10,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  navbar: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  profileHeader: {
    alignSelf: "stretch",
    height: 180,
    backgroundColor: "#00ff99",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  profilePicture: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fc4970',
    borderWidth: 5,
  },
  profileNameText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 20,
    textAlign: 'center'
  },
  profileText: {
    padding: 50,
    fontSize: 30,
    color: "#ffffff",
    fontFamily: "Roboto"
  },
  channelCard: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    // borderWidth: 1,
    // borderColor: "#000",
    // borderRadius: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
  },
  channelText: {
    fontSize: 22,
    textAlign:'left',
  },
  notificationBell: {
    width: 70,
    height: 70,
  },
  rightArrow: {
    width: 50,
    height: 50,
  },
  settingsIcon: {
    width: 50,
    height: 50,
  },
  helpIcon: {
    width: 50,
    height: 50,
  }
}));