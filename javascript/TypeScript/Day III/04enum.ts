// Enum allow us to define a set of named constants.
// Enumeration improves the readability of your program.

// In TypeScript
// Numeric Enum
// String Enum
// Heterogenous Enum - Combination of Numeric and String


// function Open(mode:string){
//     console.log(`File Opened in "${mode}" mode`);
// }

// function Open(mode:string){
//     switch(mode){
//         case 'Read':
//         case 'Write':
//         case 'ReadWrite':
//             console.log(`File Opened in "${mode}" mode`);
//             break;
//         default:
//             throw new Error('Wrong File Mode!');
//     }
// }

// Open('Read');
// Open('Write');
// Open('ReadWrite');
// Open('Sachin');

// Numeric Enum
// enum Mode{Read, Write, ReadWrite};
// enum Mode{Read=10, Write=20, ReadWrite};

// // String Enum
// enum Mode{Read='Read', Write='Write', ReadWrite='ReadWrite'};

// Heterogenous Enum
// enum Mode{Read='Read', Write=20, ReadWrite='ReadWrite'}
enum Mode{Read='Read', Write=20, ReadWrite}

function Open(mode:Mode){
    console.log(`File Opened in "${mode}" mode`);
}


Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);

