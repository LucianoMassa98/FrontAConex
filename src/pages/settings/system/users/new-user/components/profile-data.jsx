import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { DatePicker, Form, TextInput } from '@/components/form';
import { useNewUser } from '../context/new-user.context';

export const ProfileData = () => {
	const { view, updateView, updateNewUser } = useNewUser();

	const handleSubmit = (profile) => {
		const dateOfBirth = profile.nacimiento.format('MM/DD/YYYY');
		updateView('USER_DATA');
		updateNewUser({ ...profile, nacimiento: dateOfBirth });
	};

	return (
		<Slide
			direction="right"
			in={view === 'PROFILE_DATA'}
			appear={false}
			timeout={450}
			unmountOnExit
		>
			<Box sx={{ width: view === 'PROFILE_DATA' ? '100%' : 0 }}>
				<Fade in={view === 'PROFILE_DATA'} appear={false} timeout={200}>
					<div>
						<Form
							onSubmit={handleSubmit}
							defaultValues={{
								nombre: '',
								apellido: '',
								cedula: '',
								celular: '',
								direccion: '',
								email: '',
								nacimiento: null,
							}}
						>
							<Stack gap={4}>
								<TextInput fullWidth name="nombre" label="Nombre" />
								<TextInput fullWidth name="apellido" label="Apellido" />
								<TextInput fullWidth name="cedula" label="Número de DNI o Pasaporte" />
								<TextInput fullWidth name="celular" label="Celular" />
								<TextInput fullWidth name="direccion" label="Dirección" />
								<TextInput fullWidth name="email" label="Email" />
								<DatePicker
									name="nacimiento"
									label="Nacimiento"
									disableFuture
									slotProps={{ textField: { variant: 'standard' } }}
								/>
								<Button variant="contained" type="submit">
									Siguiente
								</Button>
							</Stack>
						</Form>
					</div>
				</Fade>
			</Box>
		</Slide>
	);
};
