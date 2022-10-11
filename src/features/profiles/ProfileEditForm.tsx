import { observer } from "mobx-react-lite";
import { Button } from "semantic-ui-react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useStore } from "../../app/stores/store";
import MyTextInput from "../../app/common/form/MyTextInput";
import MyTextArea from "../../app/common/form/MyTextArea";

interface Props {
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({setEditMode}: Props) {
    const {profileStore: {profile, updateProfile}} = useStore();

    const validationSchema = Yup.object({
      displayName: Yup.string().required("Display name required")
    })

    return (
        <Formik
            initialValues={{
              displayName: profile?.displayName,
              biography: profile?.biography
            }}
            onSubmit={values => {
                updateProfile(values).then(() => {
                    setEditMode(false);
                })
            }}
            validationSchema={validationSchema}
        >
            {({isValid, isSubmitting, dirty}) => (
                <Form className='ui form' autoComplete='off'>
                    <MyTextInput name='displayName' placeholder='Display name'/>
                    <MyTextArea name='biography' placeholder='Add your biography' rows={3} />
                    <Button 
                        positive
                        type='submit'
                        loading={isSubmitting}
                        content='Update profile'
                        floated='right'
                        disabled={!isValid || !dirty}
                    />
                </Form>
            )}
        </Formik>
    )
})