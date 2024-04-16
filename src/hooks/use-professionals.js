import { useStore } from '@/store/use-store';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

const getProfessionals = async (clinicId, professionalId) => {
	let endpoint = `/profesionales/${clinicId}`;
	if (professionalId) endpoint += `/${professionalId}`;

	const response = await api.get(endpoint);
	return response.data;
};

/**
 * @param {number} [professionalId]
 */
export const useProfessionals = (professionalId) => {
	const { id } = useStore((state) => state.clinic);

	return useQuery({
		queryKey: ['professionals', id, professionalId],
		queryFn: () => getProfessionals(id, professionalId),
	});
};
