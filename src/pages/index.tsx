import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Container, Typography } from '@mui/material'
import { 
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer 
} from '@styles/pages/index.style'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />

      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP Inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px"}}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
            <UserInformation
              name={"Flavio Mendes"}
              picture={"https://github.com/Flaviohmm.png"}
              rating={3}
              description={"Natal"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>

    </div>
  )
}