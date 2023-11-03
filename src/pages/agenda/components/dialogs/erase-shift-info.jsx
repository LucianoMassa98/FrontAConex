import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grow from '@mui/material/Grow';
import { useEditShifts } from '../../hooks/use-edit-shifts';

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @param {number} props.shiftId
 */
export const EraseShiftInfo = ({ open, onClose, shiftId }) => {
	const { mutate, isSuccess, isError } = useEditShifts();

	const handleErase = () => {
		mutate(
			{
				shiftId,
				habilitado: true,
				obraSocial: null,
				observacion: null,
				pacienteId: null,
				presentismo: null,
			},
			{ onSuccess: () => setTimeout(onClose, 4_000) }
		);
	};

	return (
		<Dialog open={open} onClose={onClose} fullWidth>
			<DialogTitle>Anular turno</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Estás a punto de borrar todos los datos de este turno, incluido la cita del paciente. El
					turno volverá a estar disponible. Estás seguro?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleErase}>Sí, anular turno</Button>
				<Button onClick={onClose} variant="contained">
					No, cerrar
				</Button>
			</DialogActions>
			{isSuccess && (
				<Grow appear in={isSuccess}>
					<Alert severity="success">Éxito</Alert>
				</Grow>
			)}
			{isError && (
				<Grow appear in={isError}>
					<Alert severity="error">Hubo un problema. Por favor, intenta de nuevo.</Alert>
				</Grow>
			)}
		</Dialog>
	);
};
