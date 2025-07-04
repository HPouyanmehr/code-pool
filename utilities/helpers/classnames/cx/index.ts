type ClassValue = string | boolean | null | undefined;
type ClassArgument = ClassValue | ClassValue[] | Record<string, any>;

export const cx = (...classes: ClassArgument[]): string => {
 const processedClasses: string[] = [];
 
 for (let i = 0; i < classes.length; i++) {
   const item = classes[i];
   
   if (!item) continue;
   
   if (typeof item === 'string' && item !== '') {
       processedClasses.push(item);
   } else if (Array.isArray(item)) {
     for (let j = 0; j < item.length; j++) {
       const nestedResult = cx(item[j]);
       if (nestedResult) {
         processedClasses.push(nestedResult);
       }
     }
   } else if (typeof item === 'object') {
     const keys = Object.keys(item);
     for (let k = 0; k < keys.length; k++) {
       const key = keys[k];
       if (item[key]) {
         processedClasses.push(key);
       }
     }
   }
 }
 
 return processedClasses.join(' ');
};
