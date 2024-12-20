const convertFromCelsius = (celsius) => {
    return celsius * 9 / 5 + 32;
}
convertFromCelsius(32);
convertFromCelsius(0);
convertFromCelsius(20);

const treeCarver = (name1, name2) => {
    const firstInitials = getInitials(name1);
    const secondInitials = getInitials(name2);
    
    return firstInitials + ' hearts ' + secondInitials;
}

const getInitials = (name) => {
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];
    
    return firstName[0] + '.' + lastName[0] + '.';
}

treeCarver('Lois Lane', 'Clark Kent') //> 'L.L. hearts C.K'

const student1 = () => {
    const names1 = ['Wacine'];
    student2(names1);
}

const student2 = (names) => {
    const names2 = names.slice(); //[...names]
    names2.push('Jason');
    student3(names2);
}

const student3 = (names) => {
    const names3 = [...names];
    names3.push('Cristine');
    instructor(names3);
}

const instructor = (names) => {
    console.log(names);
}

student1();

const sumArray = (nums) => {
    if (nums.length === 1) {
        return nums [0];
    }

    return nums[0] + sumArray(nums.slice(1))
}

sumArray([9]); //> 9
sumArray([5, 9]); //> 5 + sumArray([9])
sumArray([3, 5, 9]); //> 3 + sumArray([5, 9])
sumArray([100, 3, 5, 9]); //> 100 + sumArray([3, 5, 9])
