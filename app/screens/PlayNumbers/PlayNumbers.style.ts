import { StyleSheet } from "react-native";

const playNumbersStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  circleText: {
    fontSize: 18,
  },
  numberButton: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 50,
  },
  selectedNumberButton: {
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  numberText: {
    fontSize: 18,
  },
  selectedNumberText: {
    color: '#ffffff'
  }
});

export default playNumbersStyle;