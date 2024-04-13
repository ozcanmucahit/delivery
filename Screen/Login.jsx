import React from 'react';
import { StyleSheet, View , Text, Image, Dimensions,TouchableOpacity, TextInput} from 'react-native';


const Login = ({navigation}) => {
    return (
        <View className='w-full h-full bg-white  flex flex-col  items-center  gap-y-4'>
                <View className='relative top-4 '> 
                        <Image width={200} height={200} style={{resizeMode:'center'}} source={{uri:'https://einstronic.com/wp-content/uploads/2023/05/GrabResume.png'}}/>
                </View>
                <View  className='w-full   flex items-center gap-y-2.5 text-center '>
                    <Text className='text-[40px]  font-semibold '>Hadi Giriş Yap!</Text>
                    <Text className='text-gray-400'>Bilgilerini gir ve siparişe başla!</Text>
                </View>

                <View  className='w-full   flex items-center  p-4 gap-y-4 text-center '>
                        <TextInput 
                        className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                        placeholder='E-mail   delivery@gmail.com'/>
                         <TextInput 
                         secureTextEntry={true}
                        className='border text-green-500 font-normal border-green-500 rounded-lg  px-4 h-[50px] w-full '
                        placeholder='Şifre ******' maxLength={3}/>
                        <Text className='w-full text-left text-green-500 underline underline-offset-1'>Şifremi unuttum!</Text>
                        <TouchableOpacity  onPress={() => navigation.navigate('product')} className='w-full bg-[#00C27C] h-[60px] flex justify-center items-center rounded-lg'>
                        <Text className='text-white text-xl font-semibold'>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>

                <View  className='w-full relative top-40  flex items-center gap-y-2.5 text-center '>
                    <Text className='text-[15px]   font-semibold '>Hesabın yokmu ? <Text className='text-green-500 underline underline-offset-2'>Hemen Üye ol !</Text></Text>
                </View>
                

        </View>
    );
}

const styles = StyleSheet.create({})

export default Login;
