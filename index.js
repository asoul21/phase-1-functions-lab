// Code your solution in this file!

function distanceFromHqInBlocks(block){
 const hqBlock = 42;
 return Math.abs(block - hqBlock);
}

function distanceFromHqInFeet(block) {
    const blockLength = 264;
    const hqBlock = 42; 
    const distance = Math.abs(block - hqBlock) * blockLength;
    return distance;
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    const distance = Math.abs(endBlock - startBlock) * blockLength;
    return distance;
}

function calculatesFarePrice(start, destination) {
    const blockLength = 264;
    const distance = Math.abs(destination - start) * blockLength;
    const basePrice = 0;
    const chargePerFoot = .02;
    const maxDistance = 2500;

    if (distance <=400){
        return basePrice;
    }
    else if (distance >= 400 && distance <= 2000){
        return ((distance - 400) * chargePerFoot);
    }
    else if (distance >=2001 && distance <= maxDistance){
        return 25;
    }
    else if (distance >= maxDistance){
        return "cannot travel that far";
    }
}