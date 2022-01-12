/** Global definitions for development **/
// for style loader
// import "@testing-library/jest-dom/extend-expect";

declare module '*.css' {
  const styles: any;
  export = styles;
}


declare module "*.json" {
  const value: any;
  export default value;
}



declare namespace NodeJS {
    interface ProcessEnv {
      GATEWAY_URL?: string;
      PASSWORD_ENCRYPTED_KEY?: string;
      CREATE_AVL_REQUEST_URL?: string;
    }
}

declare module "*.png" {
    const value: any;
    export = value;
 }


// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;



