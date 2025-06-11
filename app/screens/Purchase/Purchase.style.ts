import { StyleSheet } from "react-native";

const purchaseStyle = StyleSheet.create({
  rowContainer: { 
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
  },
  numberRow: {
    marginBottom: 8,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  numberText: {
    fontSize: 16
  },
  deleteText: {
    color: '#292424'
  },
  deleteBtn: {
    backgroundColor: '#e0e0e0',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
  }
});

export default purchaseStyle;