import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Dimensions, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import classNames from 'classnames'
import {data} from './utils/data' 

const Details = ({route,navigation}) => {
    const [heart, setHeart] = React.useState(false)
    const [count, setCount] = React.useState(1)
    const [selectedButton, setSelectedButton] = React.useState(null);
    const width = Dimensions.get('window').width;
    const {key} = route.params;
    
    return (
        <View className='w-full h-full bg-white flex flex-col gap-y-2 '>
            {data.filter(items => items.id === key).map((items,key) => (
            <View>
            <View className='w-full h-[250px] flex flex-row justify-between '>
                <TouchableOpacity  onPress={() => navigation.navigate('product')} style={{ position: 'absolute', top: 60, left: 10, zIndex: 50 }} className='bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center'>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setHeart(!heart)} style={{ position: 'absolute', top: 60, right: 0, zIndex: 50 }} className='bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center'>
                    {heart ? (
                        <AntDesign name="hearto" size={24} color="black" />
                    ) : (
                        <AntDesign name="heart" size={24} color="red" />
                    )}
                </TouchableOpacity>
                <Image style={{ position: 'relative', zIndex: 1 }} className='w-full h-full' source={{ uri: items.imageUrl }} />
            </View>
            <View className='w-full flex bg-zinc-900 h-full  items-center relative -top-4 '>
                <View className='flex flex-col gap-y-3 p-3'>
                    <Text className='text-2xl font-semibold  text-white'>{items.title}</Text>
                    <Text className='text-sm text-gray-500 font-normal '>⭐️⭐️⭐️⭐️ (4.5) 214 Görüntüleme</Text>
                    <Text className='text-sm text-gray-400 font-normal  '>"En lezzetli burgerlerimizden birini denemek ister misiniz? İçinde nefis bir et, sulu bir domates, çıtır marul, lezzetli peynir ve lezzet patlatan turşu bulunuyor!" </Text>
                </View>

                <View className='flex flex-row  gap-x-6 p-3 relative top-4'>
                    {['small', 'medium', 'large'].map((item, key) => (
                        <TouchableOpacity  key={key}    onPress={() => setSelectedButton(key)}  className={classNames('border border-green-500 w-[100px] h-[50px] rounded-lg flex items-center justify-center', {
                            'bg-[#00C27C]': selectedButton === key,
                        })}>
                            <Text className={classNames('text-green-500',{
                                'text-white': selectedButton === key
                            })}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>


                <View style={{ width: width - 50 }} className=' flex   flex-row items-center justify-center  h-[70px]  rounded-xl  p-4 bg-zinc-700 border-[.5px] border-green-500  gap-x-2  relative top-6'>
                    <View className='flex items-center  w-[100px] flex-col gap-y-2'>
                        <Text className='font-semibold text-white '>Calori</Text>
                        <Text className='text-gray-400'>214</Text>
                    </View>
                    <View className='flex items-center w-[100px]  border-l-[.5px] border-r-[.5px] border-green-500   flex-col gap-y-2'>
                        <Text className='font-semibold text-white'>Sugar</Text>
                        <Text className='text-gray-400'>150grm</Text>
                    </View>
                    <View className='flex items-center w-[100px]     flex-col gap-y-2'>
                        <Text className='font-semibold text-white'>Protein</Text>
                        <Text className='text-gray-400'>240grm</Text>
                    </View>
                </View>


                <View style={{ width: width - 100, right: width - 330 }} className=' flex   flex-row items-center justify-center  h-[70px]  rounded-xl  p-4    gap-x-2  relative top-12'>
                    <TouchableOpacity onPress={() => setCount(count > 1 ? count - 1 : 1)} className='border border-[#00C27C]  w-[70px] h-[50px] rounded-lg flex items-center justify-center'>
                        <Text className='text-white text-[30px] text-center'>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-[#00C27C] w-[70px] h-[50px] rounded-lg flex items-center justify-center'>
                        <Text className='text-white text-2xl '>{count}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCount(count < 5 ? count + 1 : 5)} className='border border-[#00C27C] w-[70px] h-[50px] rounded-lg flex items-center justify-center'>
                        <Text className='text-white text-[30px]'>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: width - 100, right: width - 350 }} className=' rounded-xl  p-4   relative top-12'>
                   <Text className='text-xl  text-gray-200'>Hazırsan Sepete git!</Text>
                </View>

                <View className='w-full flex   flex-row items-center justify-center  h-[70px]  rounded-xl  p-4 bg-zinc-800   gap-x-2  relative top-20'>
                    <Text className='text-2xl text-green-500 font-bold text-center w-[70px]  '>{count * items.price}$</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('checkout',{id:items.id,price:(count * items.price)})} style={{ width: width - 100 }} className=' bg-[#00C27C]  h-[50px] rounded-md flex items-center justify-center'>
                        <Text className='text-white text-[25px] text-center'>Sepete Ekle</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </View>
            ))}
        </View>
    );
}


export default Details;
