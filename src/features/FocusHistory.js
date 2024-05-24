import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Colors} from '../utils/Colors';
import {fontSize, spacing} from '../utils/Size';
export const FocusHistory = ({history}) => {
  if(!history || !history.length) return (<Text style={styles.item}>We haven't focused on anything yet!</Text>);

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList
        data = {history}
        renderItem={renderItem}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item : {
    fontSize: fontSize.md,
    color: Colors.white,
    paddingTop: spacing.sm
  },

  title: {
    color: Colors.white,
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  }
})