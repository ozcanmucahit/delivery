import React from 'react';
import { StyleSheet, View ,Image, Text,Dimensions,TouchableOpacity} from 'react-native';


const Onboarding = ({navigation}) => {
    const width = Dimensions.get('window').width;
    const height  = Dimensions.get('window').height;
    return (
        <View className='w-full flex flex-col gap-y-4   items-center justify-center h-full bg-[#F2FCF8]'>
            <View className='relative top-24'>
                    <Image style={{width:(width)  , height:height/3,resizeMode:'contain'}}   source={{uri:'https://i.hizliresim.com/qomidis.jpg'}}/>
            </View>
            <View style={{top:(height/2)-250}} className='relative border-[.6px] border-green-500 rounded-2xl p-2 mb-12 bg-white  w-full h-[300px] flex flex-col  gap-y-4'>
                    <Text className='text-black font-semibold text-2xl text-center '>En iyi paket siparişi için bizi kuryeni seç!</Text>
                    <Text className='text-gray-300 font-normal text-sm text-center flex items-center justify w-full '>Bizi tercih ettiğiniz teşekkürler. <Text className='text-green-300 '>Siparişinizi verin, gerisini biz halledelim</Text>!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')} className='bg-[#00C27C] h-[60px] flex justify-center items-center rounded-lg'>
                        <Text className='text-white text-xl font-semibold'>Hadi Sipariş Ver!</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}


export default Onboarding;
