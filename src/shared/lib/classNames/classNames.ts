export type Modificators = Record<string, boolean | string | undefined>;

export function classNames(
  mainClass: string,
  modificators: Modificators = {},
  additionalClasses: Array<string | undefined> = []
): string {
  return [
    mainClass,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(modificators)
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
// the call: classNames("someClass", {selectable: true}, ["class1", "class2"]);
// result: "someClass class1 class2 selectable"
