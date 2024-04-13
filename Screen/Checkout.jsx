import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, Dimensions, View } from 'react-native';
import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';
import classNames from 'classnames';
import {data} from './utils/data'

const Checkout = ({route,navigation}) => {
    const {id,price} = route.params;
    console.log(id,price)
    return (
        <View className='w-full h-full bg-white flex flex-col gap-y-2 '>
            <View className='flex flex-row  relative top-12 items-center p-4 justify-between'>
                <TouchableOpacity className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-500'>
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='flex items-center justify-center w-[200px] h-[40px] rounded-full '>
                    <Text className='text-2xl font-semibold '>Sepet Ödeme</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-500'>
                    <Ionicons name="basket-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>


            <View className='flex flex-col  gap-y-4 relative top-12 items-center p-4 justify-between'>
                <TouchableOpacity className='flex flex-row px-4  items-center justify-between w-full h-[80px] rounded-lg border bg-white border-gray-300 '>
                    <View className='flex gap-x-2 flex-row items-center'>
                        <Entypo name="paypal" size={50} color="blue" />
                        <Text className='text-2xl'>Paypal</Text>
                    </View>
                    <Text className='w-8 h-8 border border-green-500 bg-green-500 rounded-full' />
                </TouchableOpacity>


                <TouchableOpacity className='flex flex-row px-4  items-center justify-between w-full h-[80px] rounded-lg bg-gray-100'>
                    <View className='flex gap-x-2 flex-row items-center'>
                        <AntDesign name="creditcard" size={50} color="orange" />
                        <Text className='text-2xl'>Credi Cart</Text>
                    </View>
                    <Text className='w-8 h-8 border border-green-500  rounded-full' />
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row px-4  items-center justify-between w-full h-[80px] rounded-lg bg-gray-100'>
                    <View className='flex gap-x-2 flex-row items-center'>
                        <AntDesign name="google" size={50} color="red" />
                        <Text className='text-2xl'>Google Pay</Text>
                    </View>
                    <Text className='w-8 h-8 border border-green-500  rounded-full' />
                </TouchableOpacity>
            </View>


            <View className='w-full relative top-12 p-4 gap-y-2 flex flex-col '>
                <Text className='text-2xl text-green-500'>Adres</Text>
                <View className='flex flex-row items-center   rounded-xl px-4 justify-between bg-green-500 w-full h-[70px]'>
                    <Entypo name="location-pin" size={24} color="white" />
                    <Text className='text-white'>Bursa Osmangazi /  c block</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                         <Feather name="edit" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='w-full relative top-6 p-4 gap-y-2 flex flex-col '>
               {data.filter(items => items.id == id ).map(item => (
                <View key={item.id}>
                 <Text className='text-2xl text-green-500'>Toplamda</Text>
                 <View className='flex flex-row items-center   rounded-xl px-4 justify-between  border border-green-500 w-full h-[70px]'>
                     <Text className='text-black font-semibold text-2xl '>{price}$</Text>
                     <Text className='text-gray-500 text-xl'>{item.title} (4 parça)</Text>
                 </View>
                 </View>
               ))}
            </View>

            <View className='w-full flex relative top-6 p-2  gap-y-2 flex flex-col '>
                <TouchableOpacity   onPress={() => navigation.navigate('maps')} className='bg-green-500 flex px-4  items-center justify-center w-full h-[80px] rounded-lg'>
                        <Text className='text-[30px] text-center text-white font-semibold'>Siparişi Onayla</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Checkout;
