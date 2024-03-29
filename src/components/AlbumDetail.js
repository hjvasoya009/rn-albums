import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => Linking.openURL(url)}
                >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
