require 'test_helper'

class PartnersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get partners_index_url
    assert_response :success
  end

end
