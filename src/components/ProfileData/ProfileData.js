import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { goToAdressRegister, goToSignUp } from '../../routes/Coordinator'
import { DataContainer, H4 } from './styles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import useProtectedPage from '../../hooks/useProtectedPage';
import GlobalStateContext from '../../context/GlobalStateContext';

export default function ProfileData (props) {
    const { states, requests, setters } = useContext(GlobalStateContext);
    const history = useHistory()
    // useProtectedPage();

    const editPersolnalInfo = () =>{
        goToSignUp(history) //fazer lógica para não haver nova senha e mudar button Criar para Salvar. Além disso trocar header e path. Troca o axios para update profile
    }
    const editAddressInfo = () =>{
        goToAdressRegister(history)//fazer lógica para não haver nova senha e mudar button Criar para Salvar. Além disso trocar header e path
    }


    return(
        <div>
            {states.profile.name && (
                <DataContainer>
                    <div>
                        <p>{states.profile.name}</p>
                        <p>{states.profile.email}</p>
                        <p>{states.profile.cpf}</p>
                    </div>
                    <div>
                        <EditOutlinedIcon onClick={editPersolnalInfo}/>
                    </div>
                </DataContainer>
            )}

                    
            {states.profile.address && (
                <DataContainer>
                    <div>
                        <H4>Endereço Cadastrado</H4>
                        <p>{states.profile.address}</p>
                    </div>  
                    <div>
                        <EditOutlinedIcon onClick={editAddressInfo}/>
                    </div>
                </DataContainer>
            )}
        </div>
    )
}