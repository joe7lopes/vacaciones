import React from 'react';
import { Dimensions, View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native';
const { width, height } = Dimensions.get('window');

class Main extends React.Component {
    state = {
        selectedPlan: undefined,
        plans: [
            {key: 'Trip to ibiza'},
            {key: 'Coffee'},
            {key: 'Visit Grandma'},
          ]
    }

    renderPlan(plan){
        return (
            plan ? <Text style={styles.plan}>{plan.key}</Text> : <Text> No Plans </Text>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Plans</Text>
                <FlatList
                    data={this.state.plans}
                    renderItem={({ item }) => this.renderPlan(item)}
                />
                <Text style={styles.plan}>Plans</Text>
                <Button
                    title="Create new plan"
                    onPress={()=> Alert.alert('tapped')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plan: {
        fontSize: 18,
      },
    title: {
        fontSize: 22
    }
});

export default Main;