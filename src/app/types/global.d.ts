declare module "*.scss" {
  interface IClassnames {
    [className: string]: string;
  }
  const classNames: IClassnames;
  export = classNames;
}
declare module "*.png" {
  const content: any;
  export default content;
}
