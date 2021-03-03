import React from 'react'
import { useHistory } from 'react-router'
import { goToAdressRegister, goToSignUp } from '../../routes/Coordinator'
import { DataContainer, H4 } from './styles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
                        <EditOutlinedIcon onClick={editPersolnalInfo}/>
                    </div>
                </DataContainer>
            )}

                    
            {props.address && (
                <DataContainer>
                    <div>
                        <H4>Endereço Cadastrado</H4>
                        <p>{props.address}</p>
                    </div>  
                    <div>
                        <EditOutlinedIcon onClick={editAddressInfo}/>
                    </div>
                </DataContainer>
            )}
        </div>
    )
}