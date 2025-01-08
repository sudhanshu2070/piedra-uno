export type RootStackParamList = {
    SplashScreen: undefined;
    UserTypeScreen: undefined;
    LoginScreen: { role: string }; 
    OTPScreen: {last4Digits: string};
  };  