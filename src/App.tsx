import React, {useCallback, useState} from 'react';
import './App.css';
import SingleInput from "./components/SingleInput";

const getRandomAmount = (password: string) => {
    const passwordLength = password.length
    const minValue = passwordLength + 3
    const maxValue = passwordLength * 2
    const result = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return result
}

type inputsType = { index: number, isDisabled: boolean }

function App() {
    const [shouldHidePassword, setShouldHidePassword] = useState(true)
    const [password, setPassword] = useState("Fabianek12")
    const [inputs, setInputs] = useState([])

    const getPreparedInputs = useCallback((password: string) => {
        const tempArray = []
        let amountOfInputs = getRandomAmount(password)
        let passwordCharsLeft = password.length
        let overallCharsLeft = amountOfInputs

        for(let i = 0; i < amountOfInputs; i++) {
            tempArray.push({isDisabled: false, index: i})
        }

        const result = tempArray.map((element) => {
            if(overallCharsLeft > passwordCharsLeft) {
                if(!passwordCharsLeft) {
                    overallCharsLeft--
                    return {...element, isDisabled: true}
                }else {
                    const isTrue = Math.round(Math.random())
                    if(isTrue) {
                        overallCharsLeft--
                        return {...element, isDisabled: true}
                    }else {
                        passwordCharsLeft--
                        overallCharsLeft--
                        return element
                    }
                }
            }else {
                passwordCharsLeft--
                overallCharsLeft--
                return element
            }
        })
    }, [password])

  return (
      <div>
          <div>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='password_input_wrapper'>
              {inputs ? inputs.map(({ index, isDisabled }) => <SingleInput index={ index } isDisabled={ isDisabled } isHidden={shouldHidePassword} key={ index } />) : null}
          </div>
          <div>
              <input type="checkbox" onChange={() => setShouldHidePassword(!shouldHidePassword)} checked={shouldHidePassword}/>
          </div>
      </div>

  );
}

export default App;
