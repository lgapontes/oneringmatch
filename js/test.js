const DEBUG = false;

function debugBoolean(result,functionName) {
  if (result) {
    console.log('OK: ' + functionName);
  } else {
    console.error('ERROR: ' + functionName);
  }
}

function debugMessage(result,functionName,msg) {
  if (result) {
    console.log('OK: ' + functionName + ' -> ' + msg);
  } else {
    console.error('ERROR: ' + functionName + ' -> ' + msg);
  }
}

const TEST_METHODS = {
  ifEqual: (functionName,obj1,obj2) => {
    let elements1 = Object.keys(obj1);
    let elements2 = Object.keys(obj2);
    let equal = true;
    elements1.forEach((item1, index) => {
      if (item1 !== elements2[index]) {
        equal = false;
      }

      if (index == (elements1.length - 1)) {
        debugBoolean(equal,functionName);
      }
    });
  }
};

const TESTS = {
  test1: (functionName) => {
    let obj1 = REWARDS_LIST['CLOSE-FITTING'];
    let obj2 = clone(obj1);
    TEST_METHODS.ifEqual(functionName,obj1,obj2);
  },
  test2: (functionName) => {
    let t1 = HEROIC_CULTURES['Bardings'];
    t1.final_stats = clone(FINAL_CHARACTER);
    let t2 = clone(t1);
    t2.final_stats = clone(FINAL_CHARACTER);

    t1.final_stats.age = 5;
    t2.final_stats.age = 10;

    let notEqual = (t1.final_stats.age !== t2.final_stats.age);
    debugBoolean(notEqual,functionName);
  },
  test3: (functionName) => {
    let a1 = ['a','b','c','d'];
    try {
      randomArray(a1,item=>{
        debugMessage(true,functionName,'randomArray ' + item);
      });
    } catch (e) {
      debugMessage(false,functionName,'randomArray');
    }
  },
  test4: (functionName) => {
    let a1 = ['a','b','c','d'];
    let a2 = ['c'];
    try {
      randomArrayMinusExclusionary(a1,a2,item=>{
        if (item != 'c') {
          debugMessage(true,functionName,'randomArrayMinusExclusionary ' + item);
        } else {
          debugMessage(false,functionName,'randomArrayMinusExclusionary ' + item);
        }
      });
    } catch (e) {
      debugMessage(false,functionName,'randomArrayMinusExclusionary');
    }
  },
  test5: (functionName) => {
    let a1 = ['a','b','c'];
    let a2 = ['a','b','c','d'];
    try {
      randomArrayMinusExclusionary(a1,a2,item=>{
        debugMessage(false,functionName,'randomArrayMinusExclusionary ' + item);
      });
    } catch (e) {
      debugMessage(true,functionName,'randomArrayMinusExclusionary ' + e);
    }
  },
  test6: (functionName) => {
    let min = 5;
    let max = 10;
    randomBetween(min,max,number=>{
      if ( (number >= min) && (number <= max) ) {
        debugMessage(true,functionName,'randomBetween ' + number);
      } else {
        debugMessage(false,functionName,'randomBetween ' + number);
      }
    });
  },
  test7: (functionName) => {
    let valid = true;
    let array = [...Array(1000).keys()];
    array.forEach((item, index) => {
      let result = (Math.floor(Math.random() * 1));
      if (result != 0) {
        valid = false;
      }

      if (index == (array.length - 1)) {
        debugMessage(valid,functionName,'random 0');
      }
    });
  },
  test8: (functionName) => {

    randomHeroicCulture('',(character)=>{
      let initial_skills = HEROIC_CULTURES[character.heroic_culture].skills;
      let array_initial_skills = Object.keys(initial_skills);

      let initial_proficiencies = clone(character.initial_combat_proficiencies);
      let array_initial_proficiencies = Object.keys(initial_proficiencies);

      let final_skills = clone(character.skills);
      let array_final_skills = Object.keys(final_skills);

      let final_proficiencies = clone(character.combat_proficiencies);
      let array_final_proficiencies = Object.keys(final_proficiencies);

      let count = 0;

      array_initial_skills.forEach((initial, index) => {

        let initial_value = initial_skills[array_initial_skills[index]];
        let result = final_skills[array_final_skills[index]] - initial_value;
        if (initial_value == 0) {
          if (result == 1) {
            count = count + 1;
          } else if (result == 2) {
            count = count + 3;
          } else if (result == 3) {
            count = count + 6;
          }
        } else if (initial_value == 1) {
          if (result == 1) {
            count = count + 2;
          } else if (result == 2) {
            count = count + 5;
          } else if (result == 3) {
            count = count + 10;
          }
        } else if (initial_value == 2) {
          if (result == 1) {
            count = count + 3;
          } else if (result == 2) {
            count = count + 8;
          }
        } else if (initial_value == 3) {
          if (result == 1) {
            count = count + 5;
          }
        }

        if (index == (array_initial_skills.length - 1)) { // INICIO

          let ja_existe1 = false;
          let ja_existe2 = false;

          array_initial_proficiencies.forEach((initial2, index2) => {

            let initial2_value = initial_proficiencies[array_initial_proficiencies[index2]];
            let result2 = final_proficiencies[array_initial_proficiencies[index2]] - initial2_value;
            if (initial2_value == 0) {
              if (result2 == 1) {
                count = count + 2;
              } else if (result2 == 2) {
                count = count + 6;
              }
            } else if (initial2_value == 1) {
              if (result2 == 1) {
                count = count + 4;
              } else if (result2 == 2) {
                count = count + 10;
              }
            } else if (initial2_value == 2) {
              if (result2 == 1) {
                count = count + 6;
              }
            }

            if (index2 == (array_initial_proficiencies.length - 1)) {
              if (count == 10) {
                debugMessage(true,functionName,'Validação das Skills e Proficiências. Count: ' + count);
              } else if (count == 9) {
                debugMessage(true,functionName,'Validação das Skills e Proficiências com sobra de pontos. Count: ' + count);
              } else {
                debugMessage(false,functionName,'Validação das Skills e Proficiências. Count: ' + count);
              }
            }
          });

        } // FIM
      });
    });

  },
  test9: (functionName) => {
    let array = ['1-Bows','2-Brawling','0-Spears','3-Axes','0-Swords'];
    let sortedArray = sortArray(array);
    if (
      (sortedArray[0] == '3-Axes') &&
      (sortedArray[1] == '2-Brawling') &&
      (sortedArray[2] == '1-Bows') &&
      (sortedArray[3] == '0-Swords') &&
      (sortedArray[4] == '0-Spears')
    ) {
      debugMessage(true,functionName,'Armas ordenadas: ' + JSON.stringify(sortedArray));
    } else {
      debugMessage(false,functionName,'Armas ordenadas: ' + JSON.stringify(sortedArray));
    }
  },
  test10: (functionName) => {
    let array = ['2-Brawling','1-Spears','0-Axes','3-Bows','2-Swords'];
    let sortedArray = sortArray(array);
    if (
      (sortedArray[0] == '3-Bows') &&
      (sortedArray[1] == '2-Swords') &&
      (sortedArray[2] == '2-Brawling') &&
      (sortedArray[3] == '1-Spears') &&
      (sortedArray[4] == '0-Axes')
    ) {
      debugMessage(true,functionName,'Armas ordenadas: ' + JSON.stringify(sortedArray));
    } else {
      debugMessage(false,functionName,'Armas ordenadas: ' + JSON.stringify(sortedArray));
    }
  },
  test11: (functionName) => {
    let array = ['Item1','Item2','Item3','Item4'];
    let arrayToRemove = ['Item2','Item4','Item5'];
    removeArray(array,arrayToRemove,(resultArray)=>{
      if (
        (resultArray.length == 2) &&
        (resultArray[0] == 'Item1') &&
        (resultArray[1] == 'Item3')
      ) {
        debugMessage(true,functionName,'Remover array: ' + JSON.stringify(resultArray));
      } else {
        debugMessage(false,functionName,'Remover array: ' + JSON.stringify(resultArray));
      }
    });
  },
  test12: (functionName) => {
    let resultado = true;
    for (let i=0; i<100; i++) {

      rollCharacter((character)=>{
        convertCharacterToSheet(character,(characterSheet)=>{
          renderCharacterSheet(characterSheet,()=>{
            CHARACTER_ROLLED = {
              character: character,
              characterSheet: characterSheet
            };

            getSheetData(characterSheet,(formCharacterSheet)=>{
              let j1 = JSON.stringify(characterSheet);
              let j2 = JSON.stringify(formCharacterSheet);
              if (j1 != j2) {
                resultado = false;
                debugMessage(false,functionName,'Objetos diferentes');
                console.error(characterSheet);
                console.error(formCharacterSheet);
              }

              if (i == 99) {
                debugMessage(resultado,functionName,'Comparar sheets');
              }
            });
          });
        });
      });
    }
  },
};

if (DEBUG) {
  let tests = Object.keys(TESTS);
  tests.forEach((test, index_test) => {
    TESTS[test](test);
  });
}
