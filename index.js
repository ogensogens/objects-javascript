//1.  Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
function instagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes ){
    this.handleOfAuthor= handleOfAuthor;
    this.content = content;
    this.imageLink= imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes


}

const InstagramPost1 = new instagramPost('Gerald', 'Pictures', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', '50', '200')
console.log({InstagramPost1})

// 2. Create 2 Instagram post objects from the constructor function you created above

const InstagramPost2 = new instagramPost('Dayo', "Pictures", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", "40", "100")
console.log({InstagramPost2})

// 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:

function person (age, gender, nationality, location){
    return {
        age: age,
        gender: gender, 
        nationality: nationality,
        location: location,
       
    }
}

const Musa = person(19, 'male', 'Nigerian', 'Lagos')
console.log({Musa})

function createJamsScores(ENG, GOVT, LIT, CRK){
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK,
    }

}

const jambScoresMusa = createJamsScores(70, 85, 82, 94)



console.log({jambScoresMusa})
const MusaJ = {...Musa, ...({jambScoresMusa})}
console.log({MusaJ})

//4.  What are the different ways you can clone an object? Give examples for each of them.
//1. we can clone objects using object.assign

const Mary = person(20, 'female', 'British', 'London')
console.log({Mary})
const jambScoresMary = createJamsScores(80, 96, 99, 100)
console.log({jambScoresMary})
const MaryJ = Object.assign(Mary, {jambScoresMary})
console.log({MaryJ})

//Option 2 - using spread syntax
const Julie = person(24, 'female', 'sokoto', 'london')
const jambScoresJulie = createJamsScores(20, 50, 70, 80)
const JulieJ = {...Musa, ...({jambScoresJulie})}
console.log({JulieJ})

//5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imunolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'

}

for (const property in presidentialCandidates){
    // console.log(property)
    console.log( presidentialCandidates[property] + " is the Presidential Candiate of the " + property)
}

for (let key of Object.keys(presidentialCandidates)){
    console.log(presidentialCandidates[key] + " is the Presidential Candiate of the " + key)
}

