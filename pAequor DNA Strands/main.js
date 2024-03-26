// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum,dna) {
    return {
      specimenNum,
      dna,
      mutate() {
        baseToMutate = Math.floor(Math.random()*15)
        const dnaBases = ['A', 'T', 'C', 'G']
        const newDnaBases = dnaBases.filter(base => {
          return base !== this.dna[baseToMutate]
        })
        const newMutatedBase = newDnaBases[Math.floor(Math.random() * 3)]
        this.dna[baseToMutate] = newMutatedBase
        return this.dna
        },
      compareDNA(dnaToCompare) {
        let counter = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === dnaToCompare[i]) {
            counter++
          }
        }
        const percentage = Math.ceil(100*counter/this.dna.length)
        console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`)
      },
      willLikelySurvive() {
        let counter = 0
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            counter++
          }
        }
        if (counter/this.dna.length >= 0.6) {
          return true
        } else {
          return false
        }
      }
      }
    }
  
  
  const testStrand = pAequorFactory(1,mockUpStrand())
  console.log(testStrand)
  
  console.log(testStrand.mutate())
  
  console.log(testStrand.compareDNA(mockUpStrand()))
  
  const pAequorInstances = []
  for (let i = 0; i < 30; i++) {
    pAequorInstances.push(pAequorFactory(i+1,mockUpStrand()))
  }
  console.log(pAequorInstances)
  