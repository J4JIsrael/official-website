interface ElementStyles {
  [key: string]: string;
}

interface ClassesInterface {
  [key: string]: ElementStyles;
}

export const formatClassesObject = (classes: ClassesInterface) => {
  const classesKeys = Object.keys(classes);

  const reducedClasses = {} as ElementStyles;

  classesKeys.forEach(key => {
    const elementKeys = Object.keys(classes[key]);
    const elementClasses = elementKeys.map(
      elementKey => classes[key][elementKey]
    );
    reducedClasses[key] = elementClasses.join(' ');
  });

  return reducedClasses;
};
