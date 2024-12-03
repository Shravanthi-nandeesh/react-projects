import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SPACING } from '../../constants';
import jobDetailsStyle from './JobDetails.style';

const TabButton = ({ name, activeTab, handleSelectedType }) => {
  return (
    <TouchableOpacity onPress={handleSelectedType}
      style={jobDetailsStyle.tabButton(name, activeTab)}>
      <Text style={jobDetailsStyle.name(name, activeTab)} >{name}</Text>
    </TouchableOpacity>
  );
};
const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={jobDetailsStyle.wrapper}>
      <FlatList
        data={tabs}
        keyExtractor={(item) => item}  // Add a unique key for each item in FlatList
        renderItem={({ item }) => (
          <TabButton name={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleSelectedType={() => setActiveTab(item)}


          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SPACING.medium }}

      />
    </View>
  );
};

export default JobTabs;
