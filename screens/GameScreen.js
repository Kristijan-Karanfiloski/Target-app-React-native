import { Text, View, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.title}>Opponents's Guess</Text>
        {/*//GUESS*/}
        <View>
          <Text>Higher or lower?</Text>
          {/*   +- */}
        </View>
        <View>{/*Log ROUNDs*/}</View>
      </View>
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
  },
});
