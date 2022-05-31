import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2, alignItems: "center" }}>
      <View style={{}}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <StyledText fontSize="subheading" fontWeight="bold" color="primary">
          {props.fullName}
        </StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => {
  return (
    <View style={styles.container} key={props.id}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    marginVertical: 2,
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
});

export default RepositoryItem;
