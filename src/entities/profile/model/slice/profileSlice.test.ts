import {
  profileActions,
  profileReducer,
  ProfileSchema,
  updateProfileData,
  ValidateProfileError,
} from "entities/profile";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "ulbi tv",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setProfileReadonly(true)
      )
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelProfileEdit())
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "123" } };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfileData({
          username: "123456",
        })
      )
    ).toEqual({
      form: { username: "123456" },
    });
  });

  //   test("test update profile service pending", () => {
  //     const state: DeepPartial<ProfileSchema> = {
  //       isLoading: false,
  //       validateErrors: [ValidateProfileError.SERVER_ERROR],
  //     };

  //     expect(
  //       profileReducer(state as ProfileSchema, updateProfileData.pending)
  //     ).toEqual({
  //       isLoading: true,
  //       validateErrors: undefined,
  //     });
  //   });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
