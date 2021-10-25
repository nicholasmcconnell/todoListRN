import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps {
    text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    circular: {

    },
    item: {

    },
    itemLeft: {

    },
    itemText: {

    },
    square: {

    }
});

export default Task;
