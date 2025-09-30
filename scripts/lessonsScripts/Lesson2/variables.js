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

let workerCost = document.querySelector('.worker-cost')
let parsedWorkerCost = parseFloat(workerCost.innerHTML)
let workerCount= document.querySelector(".worker-count")
let parsedWorkerCount = parseFloat(workerCount.innerHTML)
let workerIncrease = document.querySelector(".worker-increase")
let parsedWorkerIncrease = parseFloat(workerIncrease.innerHTML)

let researcherCost = document.querySelector('.researcher-cost')
let parsedResearcherCost = parseFloat(researcherCost.innerHTML)
let researcherCount= document.querySelector(".researcher-count")
let parsedResearcherCount = parseFloat(researcherCount.innerHTML)
let researcherIncrease = document.querySelector(".researcher-increase")
let parsedResearcherIncrease = parseFloat(researcherIncrease.innerHTML)

let resourceImageContainer = document.querySelector(".resource-image-container")
let scienceImageContainer = document.querySelector(".science-image-container")

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
        parsedWillpowerResourcesCost *= 1.1;
        willpowerResourcesCost.innerHTML = Math.round(parsedWillpowerResourcesCost)
        parsedWillpowerScienceCost *= 1.1;
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
        parsedWorkerCost *= 1.2;
        workerCost.innerHTML = Math.round(parsedWorkerCost)
        resourcesPerSecond = 0 + parsedWorkerIncrease
    }
}

function buyResearcher(){
    if (parsedScience >= parsedResearcherCost){
        science.innerHTML = Math.round(parsedScience -= parsedResearcherCost)
        researcherCount.innerHTML ++

        parsedResearcherIncrease = parseFloat((researcherCount.innerHTML * 1).toFixed(2))
        researcherIncrease.innerHTML = parsedResearcherIncrease
        parsedResearcherCost *= 1.2;
        researcherCost.innerHTML = Math.round(parsedResearcherCost)
        sciencePerSecond = 0 + parsedResearcherIncrease
    }
}

setInterval(() =>{
    parsedResources += resourcesPerSecond / 10
    resources.innerHTML = Math.round(parsedResources)
    parsedScience += sciencePerSecond / 10
    science.innerHTML = Math.round(parsedScience)
    rps.innerHTML = Math.round(resourcesPerSecond)
    sps.innerHTML = Math.round(sciencePerSecond)
    randspc.innerHTML = Math.round(resourcesPerClick)
},100)