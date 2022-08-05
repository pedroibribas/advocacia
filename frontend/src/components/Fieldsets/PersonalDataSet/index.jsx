import { CivilStatusGroup } from "./CivilStatusGroup";
import { GenderGroup } from "./GenderGroup";
import { JobGroup } from "./JobGroup";
import { NameGroups } from "./NameGroups";
import { NationalityGroup } from "./NationalityGroup";
import { SocialIdsGroups } from "./SocialIdsGroups";
import { Container } from "./styles";

export const PersonalDataSet = ({ formData, handleChange }) => {
  return (
    <Container>
      <legend>Dados Pessoais</legend>
      <NameGroups formData={formData} handleChange={handleChange} />
      <GenderGroup formData={formData} handleChange={handleChange} />
      <CivilStatusGroup formData={formData} handleChange={handleChange} />
      <NationalityGroup formData={formData} handleChange={handleChange} />
      <JobGroup formData={formData} handleChange={handleChange} />
      <SocialIdsGroups formData={formData} handleChange={handleChange} />
    </Container>
  );
};