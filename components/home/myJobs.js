import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import useRequest from '../../hook/useRequest'
import {COLORS,SIZES, FONTS} from '../../constants'
import {MyJobCard} from '../../components'

const myJobs = () => {

  const [selectedJob, setSelectedJob] = useState(null);

  const { data, isLoading, error } = useRequest("search", {
    query: "React native",
    page: "1",
  });


  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Search Results</Text>
      </View>

      <View style={styles.jobContainer}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <MyJobCard
                item={item}
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
              />
            )}
            keyExtractor={(item) => `job-${item.job_id}`}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            scrollEnabled={false}
            nestedScrollEnabled={true}
          />
        )}
      </View>
    
    </View>
  )
}

export default myJobs

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  titleContainer:{
    width:'100%'
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
  jobContainer: {
    marginTop: SIZES.medium,
  },
})