let resources = document.querySelector('.resources-count')
let parsedResources = parseFloat(resources.innerHTML)
let science = document.querySelector('.science-count')
let parsedScience = parseFloat(science.innerHTML)
let resourcesPerClick = 1
let resourcesPerSecond = 0
let sciencePerClick = 1
let sciencePerSecond = 0

let rps = document.getElementById("resources-per-second-text")
let sps = document.getElementById("science-per-second-text")
let randspc = document.getElementById("rands-per-clic-text")

let willpowerResourcesCost = document.querySelector('.willpower-resources-cost')
let parsedWillpowerResourcesCost = parseFloat(willpowerResourcesCost.innerHTML)
let willpowerScienceCost = document.querySelector('.willpower-science-cost')
let parsedWillpowerScienceCost = parseFloat(willpowerScienceCost.innerHTML)
let willpowerCount= document.querySelector(".willpower-count")
let parsedWillpowerCount = parseFloat(willpowerCount.innerHTML)
let willpowerIncrease = document.querySelector(".willpower-increase")
let parsedWillpowerIncrease = parseFloat(willpowerIncrease.innerHTML)
let willPowerCostIncreaseMultiplier = 1.1

let workerCost = document.querySelector('.worker-cost')
let parsedWorkerCost = parseFloat(workerCost.innerHTML)
let workerCount= document.querySelector(".worker-count")
let parsedWorkerCount = parseFloat(workerCount.innerHTML)
let workerIncrease = document.querySelector(".worker-increase")
let parsedWorkerIncrease = parseFloat(workerIncrease.innerHTML)
let workerCostIncreaseMultiplier = 1.2

let researcherCost = document.querySelector('.researcher-cost')
let parsedResearcherCost = parseFloat(researcherCost.innerHTML)
let researcherCount= document.querySelector(".researcher-count")
let parsedResearcherCount = parseFloat(researcherCount.innerHTML)
let researcherIncrease = document.querySelector(".researcher-increase")
let parsedResearcherIncrease = parseFloat(researcherIncrease.innerHTML)
let researcherCostIncreaseMultiplier = 1.2

let resourceImageContainer = document.querySelector(".resource-image-container")
let scienceImageContainer = document.querySelector(".science-image-container")

function maxAffordableCalculatorOneResource(increaseRate,currentPrice,currentResource){
    let count = 0
    let privCurrentPrice = currentPrice
    let privCurrentResource = currentResource
    while (privCurrentResource >= privCurrentPrice) {
        count +=1
        privCurrentResource -= privCurrentPrice
        privCurrentPrice *= increaseRate
    }
    return count
}

function maxAffordableCalculatorTwoResource(increaseRate1,currentPrice1,currentResource1,currentPrice2,currentResource2){
    let count = 0
    let privCurrentPrice1 = currentPrice1
    let privCurrentResource1 = currentResource1
    let privCurrentPrice2 = currentPrice2
    let privCurrentResource2 = currentResource2
    while (privCurrentResource1 >= privCurrentPrice1 && privCurrentResource2 >= privCurrentPrice2 ) {
        count +=1
        privCurrentResource1 -= privCurrentPrice1
        privCurrentResource2 -= privCurrentPrice2
        privCurrentPrice1 *= increaseRate1
    }
    return count
}

let maxMultibuyWillpower = 0
let maxMultibuyWorker = 0
let maxMultibuyResearcher = 0
let multibuyWillpower = [1,10,100,maxMultibuyWillpower]
let multibuyWorker = [1,10,100,maxMultibuyWorker]
let multibuyResearcher = [1,10,100,maxMultibuyResearcher]

const timeout = (div) => {
    setTimeout(() =>{
        div.remove()
    },900)
}

function incrementResources(event){
    resources.innerHTML = Math.round(parsedResources += (resourcesPerClick))

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(resourcesPerClick)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    resourceImageContainer.appendChild(div)

    div.classList.add("fade-up")

    timeout(div)
}

function incrementScience(event){
    science.innerHTML = Math.round(parsedScience += (sciencePerClick))

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(sciencePerClick)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    scienceImageContainer.appendChild(div)

    div.classList.add("fade-up")

    timeout(div)
}

function buyWillpower(){
    if (parsedResources >= parsedWillpowerResourcesCost && parsedScience >= parsedWillpowerScienceCost){
        resources.innerHTML = Math.round(parsedResources -= parsedWillpowerResourcesCost)
        science.innerHTML = Math.round(parsedScience -= parsedWillpowerScienceCost)
        willpowerCount.innerHTML ++

        parsedWillpowerIncrease = parseFloat((parsedWillpowerIncrease * 1.05).toFixed(2))
        willpowerIncrease.innerHTML = parsedWillpowerIncrease
        parsedWillpowerResourcesCost *= willPowerCostIncreaseMultiplier;
        willpowerResourcesCost.innerHTML = Math.round(parsedWillpowerResourcesCost)
        parsedWillpowerScienceCost *= willPowerCostIncreaseMultiplier;
        willpowerScienceCost.innerHTML = Math.round(parsedWillpowerScienceCost)
        resourcesPerClick = 1 + parsedWillpowerIncrease
        sciencePerClick = 1 + parsedWillpowerIncrease
    }
}

function buyWorker(){
    if (parsedResources >= parsedWorkerCost){
        resources.innerHTML = Math.round(parsedResources -= parsedWorkerCost)
        workerCount.innerHTML ++

        parsedWorkerIncrease = parseFloat((workerCount.innerHTML * 1).toFixed(2))
        workerIncrease.innerHTML = parsedWorkerIncrease
        parsedWorkerCost *= workerCostIncreaseMultiplier;
        workerCost.innerHTML = Math.round(parsedWorkerCost)
        resourcesPerSecond = 0 + parsedWorkerIncrease
    }
}

function multibuyWorker(){

}

function buyResearcher(){
    if (parsedScience >= parsedResearcherCost){
        science.innerHTML = Math.round(parsedScience -= parsedResearcherCost)
        researcherCount.innerHTML ++

        parsedResearcherIncrease = parseFloat((researcherCount.innerHTML * 1).toFixed(2))
        researcherIncrease.innerHTML = parsedResearcherIncrease
        parsedResearcherCost *= researcherCostIncreaseMultiplier;
        researcherCost.innerHTML = Math.round(parsedResearcherCost)
        sciencePerSecond = 0 + parsedResearcherIncrease
    }
}

function multibuyWorker(){

}

setInterval(() =>{
    parsedResources += resourcesPerSecond //divide by 10 if update is set at 100ms
    resources.innerHTML = Math.round(parsedResources)
    parsedScience += sciencePerSecond //divide by 10 if update is set at 100ms
    science.innerHTML = Math.round(parsedScience)
    rps.innerHTML = Math.round(resourcesPerSecond)
    sps.innerHTML = Math.round(sciencePerSecond)
    randspc.innerHTML = Math.round(resourcesPerClick)
    maxMultibuyWillpower = maxAffordableCalculatorTwoResource(willPowerCostIncreaseMultiplier,parsedWillpowerResourcesCost,parsedResources,parsedWillpowerScienceCost,parsedScience)
    multibuyWillpower[3] = maxMultibuyWillpower
    console.log(multibuyWillpower)
    maxMultibuyWorker = maxAffordableCalculatorOneResource(workerCostIncreaseMultiplier,parsedWorkerCost,parsedResources)
    multibuyWorker[3] = maxMultibuyWorker
    console.log(multibuyWorker)
    maxMultibuyResearcher = maxAffordableCalculatorOneResource(researcherCostIncreaseMultiplier,parsedResearcherCost,parsedScience)
    multibuyResearcher[3] = maxMultibuyResearcher
    console.log(multibuyResearcher)
},1000)