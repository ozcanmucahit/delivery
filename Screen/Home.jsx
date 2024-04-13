import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import classNames from 'classnames';
import {data} from './utils/data' 

const Home = ({navigation}) => {

    const [selectedkey, SelectedKeys] = React.useState(0);
    const [dataFiled, setDataFiled] = React.useState('burger');

    const handleChange = key => {
        SelectedKeys(key)
        if (key === 0) {
            setDataFiled('burger')
        }
        else if (key === 1) {
            setDataFiled('pizza')
        }

    }
    return (
        <View className='w-full h-full bg-green-600 flex flex-col gap-y-2.5 '>
            <View className='flex relative top-4 flex-row  justify-between items-center  w-full h-[100px] p-4 '>
                <View className='p-4 '>
                    <Text className='text-white text-2xl'>Mücahit</Text>
                    <View className='flex  flex-row gap-x-2'>
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text className='text-white'>Türkiye Bursa Osmangazi </Text>
                    </View>
                </View>
                <View>
                    <Image width={50} height={50} style={{ resizeMode: 'cover' }} className='rounded-full' source={{ uri: 'https://www.kindpng.com/picc/m/285-2856724_user-avatar-enter-free-photo-user-avatar-green.png' }} />
                </View>
            </View>

            <View className='w-full flex flex-row items-enter h-[60px]   p-4 relative top-10 '>
                <TextInput
                    placeholderTextColor={'white'}
                    className=' text-white text-lg font-normal border-b-[1px] border-b-white rounded-lg  px-4 h-[50px] w-full '
                    placeholder='İşletme Ara..' />
                <TouchableOpacity className='relative right-10 bg-white rounded-full h-[35px] w-[35px] flex items-center justify-center'>
                    <EvilIcons name="search" size={35} color="green" />
                </TouchableOpacity>
            </View>

            <View
                className='w-full flex flex-col gap-y-1 p-4 rounded-tl-[30px] rounded-tr-[30px] h-full  bg-white relative top-12'>
                <View className='w-full flex flex-col  gap-y-2  h-[200px] p-2'>
                    <Text className='text-lg font-semibold text-gray-500 '>Senin için ! </Text>
                    <View className='w-full h-full'>
                        <PagerView className='flex-1 gap-x-2' initialPage={0}>
                            <View style={styles.page} key="1">
                                <Image style={{ width: '100%', height: '100%', }} className='rounded-2xl ' source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f5dae688149705.5dcd64daa44dc.jpg' }} />
                            </View>
                            <View style={styles.page} key="2">
                                <Image style={{ width: '100%', height: '100%', }} className='rounded-2xl ' source={{ uri: 'https://mir-s3-cdn-cf.behance.net/projects/original/1ed59a96910575.Y3JvcCwxNzQ1LDEzNjUsODYsMA.jpg' }} />

                            </View>
                            <View style={styles.page} key="3">
                                <Image style={{ width: '100%', height: '100%', }} className='rounded-2xl ' source={{ uri: 'https://cdn.dribbble.com/users/2647419/screenshots/11484534/media/08dd844acbc353b64d40fad8ee7f6b5e.jpg' }} />
                            </View>
                        </PagerView>
                    </View>
                </View>


                <View className=' w-full h-[80px]  flex flex-row gap-x-2 p-2 relative top-8'>
                    {['Burger', 'Pizza', 'Patato'].map((item, key) => (
                        <TouchableOpacity onPress={() => handleChange(key)} key={key} className={classNames('w-[100px]  border border-[#00C27C] h-[50px] flex justify-center items-center rounded-xl', {
                            'bg-[#00C27C] text-white': selectedkey === key
                        })}>
                            <Text className={classNames('text-green-500 text-sm font-semibold', {
                                'text-white': selectedkey === key
                            })}>{item}</Text>
                        </TouchableOpacity>

                    ))}

                </View>





                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ flex: 1 }}
                    data={data.filter(items => items.type === dataFiled)}
                    numColumns={2}
                    className=' w-full h-full relative top-6'
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('details', {key:item.id})}
                            className='mb-2 mt-2 bg-white border border-gray-200 w-[180px]   h-[230px] flex   items-center rounded-md'
                        >
                            <Image
                                style={{ width: '95%', height: '50%', }} className='rounded-md '
                                source={{ uri: item.imageUrl }}
                            />
                            <View className='w-full  p-2 flex flex-col gap-y-1'>
                                <Text className='text-green-500  font-semibold'>{item.title}</Text>
                                <Text>⭐️⭐️ {item.rating}</Text>
                                <TouchableOpacity
                                    className='w-full  relative top-2 bg-[#00C27C] h-[50px] flex justify-center items-center rounded-md'
                                >
                                    <Text  onPress={() => navigation.navigate('details', {key:item.id})} className='text-lg text-white'>Detay</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}


export default Home;


const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
