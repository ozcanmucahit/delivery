import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View className='w-full h-full bg-white  flex flex-col  items-center  gap-y-4'>

                <View className='relative top-4 w-full h-[200px]  p-4 flex flex-row  justify-between items-center '>
                           <TouchableOpacity><Entypo name="chevron-small-left" size={50} color="green" /></TouchableOpacity> 
                           <Image width={70} height={70} style={{resizeMode:'center'}} className='rounded-full' source={{uri:'https://www.kindpng.com/picc/m/285-2856724_user-avatar-enter-free-photo-user-avatar-green.png'}}/>
                           <Text className='text-lg '>Profil</Text> 
                   </View>
                                

            <View className='w-full   flex items-center  p-4 gap-y-4 text-center '>
                <TextInput
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='İsim' />
                    <TextInput
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='+90 000 000 0000' />
                <TextInput
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='E-mail   delivery@gmail.com' />
                <TextInput
                    secureTextEntry={true}
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='Şifre ******' maxLength={3} />
                    <TextInput
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='Adres: Bursa ' />
                        <TextInput
                    className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                    placeholder='Kredi kartı : TR76 0009 9012 3456 7800 1000 01' />
            </View>

            <View className='w-full p-4 absolute bottom-4'>
            <TouchableOpacity className='w-full bg-[#00C27C] h-[60px] flex justify-center items-center rounded-lg'>
                    <Text className='text-white text-xl font-semibold'>Güncelle</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;
