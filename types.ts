import { TextInput, TextInputProps, TextProps, TextStyle, ViewStyle } from "react-native";

export type ScreenWrapperProps={
    style?: ViewStyle;
    children: React.ReactNode;
}

export interface InputProps extends TextInputProps{ 
    icon?: React.ReactNode;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    inputRef?:React.RefObject<TextInput>;
}


export type TypoProps={
    size?: number;
    color?: string;
    fontWeight?: TextStyle["fontWeight"];
    children: any | null ;
    style?: TextStyle;
    textProps?:TextProps;
}

export type BackButtonProps={
    style?: ViewStyle;
    iconSize?: number;
}

export type UserType={
    uid?: string;
    email?: string | null;
    name: string | null;
    image?: any;
} | null;


export type AuthContextType = {
  user: UserType;
  setUser: Function;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; msg?: string }>;
  register: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; msg?: string }>;
  updateUserData: (userId: string) => Promise<void>;
};
