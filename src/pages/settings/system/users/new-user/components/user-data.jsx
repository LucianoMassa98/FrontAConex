import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { Form, TextInput } from '@/components/form';
import { useCreateUser } from '../../../hooks/use-create-user';
import { useNewUser } from '../context/new-user.context';

export const UserData = () => {
	const { view, newUser } = useNewUser();
	const crearusuario = useCreateUser();
	const handleSubmit = (ev) => {
		const datos = [newUser, ev];
		crearusuario.mutate(datos);
	};

	return (
		<Slide direction="left" in={view === 'USER_DATA'} timeout={450} mountOnEnter>
			<Box sx={{ width: view === 'USER_DATA' ? '100%' : 0 }}>
				<Fade in={view === 'USER_DATA'} appear={false} timeout={200}>
					<div>
						<Form
							onSubmit={handleSubmit}
							defaultValues={{
								username: '',
								password: '',
							}}
						>
							<Stack gap={4}>
								<TextInput fullWidth name="username" label="Nombre de usuario" />
								<TextInput fullWidth name="password" label="Constraseña" type="password" />
								<Button variant="contained" type="submit">
									Completar
								</Button>
							</Stack>
						</Form>
						{crearusuario.isError ? (
							<Alert severity="error">Error al editar persona</Alert>
						) : crearusuario.isLoading ? (
							<CircularProgress />
						) : crearusuario.isSuccess ? (
							<Alert severity="success">Usuario editado con exito!</Alert>
						) : (
							<div />
						)}
					</div>
				</Fade>
			</Box>
		</Slide>
	);
};
