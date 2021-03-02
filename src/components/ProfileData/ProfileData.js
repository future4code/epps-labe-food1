import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { goToAdressRegister, goToSignUp } from '../../routes/Coordinator'
import { DataContainer } from './styles'

export default function ProfileData (props) {
    const history = useHistory()
    

    const editPersolnalInfo = () =>{
        goToSignUp(history) //fazer lógica para não haver nova senha e mudar button Criar para Salvar. Além disso trocar header e path. Troca o axios para update profile
    }
    const editAddressInfo = () =>{
        goToAdressRegister(history)//fazer lógica para não haver nova senha e mudar button Criar para Salvar. Além disso trocar header e path
    }


    return(
        <div>
            {props.name && (
                <DataContainer>
                    <div>
                        <p>{props.name}</p>
                        <p>{props.email}</p>
                        <p>{props.cpf}</p>
                    </div>
                    <div>
                        <button onClick={editPersolnalInfo}>editar</button>
                    </div>
                </DataContainer>
            )}

                    
            {props.address && (
                <DataContainer>
                    <div>
                        <p>{props.address}</p>
                    </div>  
                    <div>
                        <button onClick={editAddressInfo}>editar</button>
                    </div>
                </DataContainer>
                
     
            )}
        </div>
    )
}