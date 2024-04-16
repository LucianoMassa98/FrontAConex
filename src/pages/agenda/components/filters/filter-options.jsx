import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RightDrawer } from '@/components/drawers';
import { Autocomplete, Checkbox, DatePicker, Form } from '@/components/form';

const especialidades = ['Cirugia', 'Odontologia'];

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 */
export const FilterOptions = ({ open, onClose }) => {
	return (
		<RightDrawer anchor="right" open={open} onClose={onClose} sx={{ zIndex: 1201 }}>
			<Form onSubmit={console.info} defaultValues={{}}>
				<Typography variant="h4" component="h2" sx={{ mb: 3 }}>
					Filtrar por:
				</Typography>
				<Stack spacing={3} divider={<Divider />}>
					<Box>
						<Typography variant="h5" component="h3" sx={{ mb: 2 }}>
							Fechas
						</Typography>
						<DatePicker
							name="dadafas"
							slotProps={{
								textField: {
									variant: 'standard',
									helperText: 'Selecciona el día que quieres ver y el tipo de agenda.',
								},
							}}
						/>
					</Box>
					<Box>
						<Typography variant="h5" component="h3" sx={{ mb: 2 }}>
							Especialidad
						</Typography>
						<Autocomplete
							options={especialidades}
							name="especialidad"
							inputProps={{ label: 'Especialidad', variant: 'standard' }}
						/>
					</Box>
					<Box>
						<Typography variant="h5" component="h3" sx={{ mb: 2 }}>
							Horarios disponibles
						</Typography>
						<Checkbox
							name="alla"
							formControlLabelProps={{
								label: 'Muestra solo los turnos libres',
								labelPlacement: 'start',
							}}
						/>
					</Box>
				</Stack>
				<Button variant="contained" type="submit" fullWidth sx={{ mt: 3 }}>
					Filtrar
				</Button>
			</Form>
		</RightDrawer>
	);
};
