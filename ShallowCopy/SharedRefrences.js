const sharedDetails={purpose:"Job Switch"};

const obj1={currentPackage:"13.5",details:sharedDetails}

const obj2={FuturePackage:"20",details:sharedDetails}

console.log(obj1.details==obj2.details);

/*In this example, obj1.details and obj2.details are the same object (sharedDetails). Therefore, 
obj1.details === obj2.details returns true, even though no deep comparison of contents happens. 
Both obj1 and obj2 reference sharedDetails, which resides in the same memory location.*/