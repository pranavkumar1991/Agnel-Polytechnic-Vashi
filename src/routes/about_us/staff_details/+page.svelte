<script lang="ts">
	import DepartmentTeachingStaff from './DepartmentTeachingStaff.svelte';

	let civil_engineering_teaching_staff = [
		['Mr. Manvendra Sinha', 'HOD', 'M.Tech (Construction Management)', '24/6/1995', '30 years'],
		['Mr. Shashikant Sawant', 'Lecturer', 'M.Tech (Environmental Engineering)', '25/11/2005', '20 years'],
		['Ms. Nirmala Mascarenhas', 'Lecturer', 'M.Tech (Structural Engineering)', '11/12/2006', '19 years'],
		['Ms. Amarpreet Kaur', 'Lecturer (Regular)', 'M.Tech (Construction Management)', '01/08/2007', '17 years'],
		['Ms. Seema Kshirsagar', 'Lecturer', 'M.Tech (Environmental Engineering)', '05/01/2008', '16 years'],
		['Ms. Papiya Bala', 'Lecturer', 'M.E (Environmental Engineering)', '17/6/2010', '20 years'],
		['Mr. Vishal Dalvi', 'Lecturer', 'B.E. (Civil)', '14/06/2012', '10 years'],
		['Mr. Lewis Anthony', 'Lecturer', 'M.Tech (Structural Engineering)', '10/12/2012', '19 years'],
		['Ms. Ruchira Shinde', 'Lecturer', 'B.E. (Civil)', '10/12/2012', '9 years']
	];

	let automobile_engineering_teaching_staff = [
		['Mr. Nitin Kulkarni', 'HOD (Regular)', 'M.E. (Mechanical)', '10/07/2006', '24 years'],
		['Mr. Dinesh Patil', 'Lecturer (Regular)', 'M.Tech. (Mech)', '04/06/2007', '15 years'],
		['Ms. Sonal Kapadia', 'Lecturer (Regular)', 'M.Tech. (Mech)', '04/07/2008', '14 years'],
		['Ms. Cige Louis', 'Lecturer (Regular)', 'B.E. (Prodn.)', '03/01/2011', '11 years'],
		['Mr. Satish Eandole', 'Lecturer (Regular)', 'B.E. (Mech)', '09/01/2012', '12 years'],
		['Mr. Syed Mohammed Arif', 'Lecturer (Adhoc)', 'M.E.', '03/07/2019', '9 years'],
		['Mr. Mahesh Vhanmane', 'Lecturer (Adhoc)', 'B.E. (Automobile)', '05/07/2019', '8 years']
	];

	let electronics_telecommunication_teaching_staff = [
		['Ms. Raji M.P', 'H.O.D. (Regular)', 'M.E. (Electrical)', '06/06/1995', '25 years'],
		['Ms. Jewel Samantha', 'Training and Placement Officer (Regular)', 'M.Tech.( Electronics Engineering)', '07/01/1997', '23 years'],
		['Ms. Suahasini David Sekhar', 'Lecturer (Selec. Gr) (Regular)', 'M.Tech (Electrical)', '06/01/1998', '22 years'],
		['Mr. Umesh Mhapankar', 'Lecturer ( Sr. Scale) (Regular)', 'M.E. (Electronics)', '12/01/2003', '17 years'],
		['Ms. Archana Wasule', 'Lecturer (Regular)', 'M.Tech.(Electronics)', '14/12/2004', '16 years'],
		['Ms. Soanli Sherigar', 'Lecturer (Regular)', 'M.Tech ( Electronics Engg)', '07/02/2007', '20 years'],
		['Ms. Varsha Meshram', 'Lecturer (Regular)', 'M. Tech (Electronics)', '14/06/2010', '12 years'],
		['Mr. Amol Suryavanshi', 'Lecturer (Regular)', 'ME (EXTC)', '18/08/2011', '9 years']
	];

	let mechanical_engineering_teaching_staff = [
		['Ms. Beenu Johnkutty', 'H.O.D (Regular)', 'M.Tech. (Machine Design) (Regular)', '17/08/2006', '22 years'],
		['Mr. Yogesh Vishwakarma', 'Lecturer (Regular)', 'M.E. (Automobile)', '07/02/2003', '19 years'],
		['Ms. Pratima A. Kokate', 'Lecturer (Regular)', 'M. Tech. ( Machine Design)', '03/07/2007', '17 years'],
		['Mr. Ravindra Dhawale', 'Lecturer (Regular)', 'M.Tech (Production)', '01/12/2007', '20 years'],
		['Mr. Uday Gudsoorkar', 'Workshop Sup. (Regular)', 'M.E.(Manufacturing System)', '17/12/2007', '28 years'],
		['Ms. Suvarchala M.', 'Lecturer (Regular)', 'M. Tech.( Production)', '15/01/2008', '14 years'],
		['Mr. Vivek Fegade', 'Lecturer (Regular)', 'M.E (CAD CAM)', '01/02/2009', '15 years'],
		['Mr. Milind Shrirao', 'Lecturer (Regular)', 'B.E. (MECH.)', '27/07/2009', '13 years'],
		['Mr. Ganesh Gawande', 'Lecturer (Regular)', 'B.E. (MECH.)', '15/12/2010', '12 years'],
		['Ms. Madhuri Jadhav', 'Lecturer (Regular)', 'M.E. (Manufacturing)', '16/06/2011', '11 years'],
		['Mr. Chetan Baviskar', 'Lecturer (Regular)', 'M.Tech. (Machine Design)', '20/06/2011', '11 years'],
		['Mr. Premkumar Joshi', 'Lecturer (Regular)', 'M.E (Manufacturing System)', '15/07/2013', '17 years'],
		['Mr. Momin Musheer Anwar', 'Lecturer (Regular)', 'B. Tech. (Production)', '19/09/2016', '13 years']
	];

	let humanities_department = [
		['Mr. Venugopal Kurup', 'LECT.(Selec. Gr) (Regular)', 'M.Sc. B.Ed.', '09/01/1992', '28 years'],
		['Ms. Malini Pawnday', 'LECT.(Selec. Gr) (Regular)', 'M.Sc. Phy.', '16/07/1998', '22 years'],
		['Ms. Roopa Shetty', 'Lect. ( Sr. Scale) (Regular)', 'M.A.( English)', '18/06/1996', '24 years'],
		['Mr. Upendra Rai', 'LECT. ( Sr. Scale) (Regular)', 'M.Sc. (Chem.)/B. Ed.', '30/09/2003', '25 years'],
		['Ms. Shalvi Bahadur', 'LECTURER (Regular)', 'M.Sc. ( Maths)/M.Phil.', '01/07/2008', '12 years'],
		['Ms. Deepti Kalantri', 'LECTURER (Regular)', 'M.Sc. ( Physics)', '14/07/2008', '12 years'],
		['Ms. Purnima M. Barhate', 'LECTURER (Regular)', 'M.Sc. B. Ed. /M.Phil.', '20/07/2011', '11 years'],
		['Ms. R.P. Snehalatha', 'LECTURER (Regular)', 'M.Sc./ B.Ed.', '06/04/2012', '8 years']
	];
</script>

<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name of the staff</th>
				<th>Designation</th>
				<th>Joining date</th>
				<th>Experience</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div class="font-bold">Ms. Saly Antony</div>
					</div>
				</td>
				<td>
					Principal
					<br />
					<span class="badge badge-ghost badge-sm">Masters in Engineering</span>
				</td>
				<td>29/03/1989</td>
				<td>31 years</td>
			</tr>
		</tbody>
		<DepartmentTeachingStaff tableHeading="Civil Engineering Department - Teaching Staff" data={civil_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Automobile Engineering Department - Teaching Staff" data={automobile_engineering_teaching_staff} />
		<DepartmentTeachingStaff
			tableHeading="Electronics Telecommunication Engineering Department - Teaching Staff"
			data={electronics_telecommunication_teaching_staff}
		/>
		<DepartmentTeachingStaff tableHeading="Mechanical Engineering Department - Teaching Staff" data={mechanical_engineering_teaching_staff} />
		<DepartmentTeachingStaff tableHeading="Humanities Department - Teaching Staff" data={humanities_department} />
	</table>
</div>
