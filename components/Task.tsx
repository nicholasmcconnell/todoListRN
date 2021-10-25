import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskProps {
    text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {

    return (
        <View>
            <Text>{text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});

export default Task;
