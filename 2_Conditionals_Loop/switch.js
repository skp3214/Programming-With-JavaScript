var light="yellow"

switch (light) {
    case 'green':
        console.log("You Drive")
        break;
        
    case 'yellow':
    case 'Yellow':               // You can give multiple condition in a switch.
        console.log("You Ready")
        break;

    default:
        console.log('unknown')
        break;
}