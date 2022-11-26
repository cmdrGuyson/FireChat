import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  background: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  body: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    color: "gray",
    alignSelf: "center",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 10,
    color: "gray",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 80,
  },
  input: {
    backgroundColor: "#F6F7F8",
    height: 58,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  subContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  subContainerText: {
    color: "gray",
    fontWeight: "600",
    fontSize: 14,
  },
  subContainerButton: {
    color: "#3960c9",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default styles;
